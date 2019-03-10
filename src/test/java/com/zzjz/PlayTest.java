package com.zzjz;


import java.io.IOException;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.net.MulticastSocket;
import java.util.Scanner;


/**
 * 功能：测试组播.
 * @author :  xuedong.cao
 * @version :1.0
 */
public class PlayTest {

    private final static String BC_IP = "239.255.255.250"; // 组播地址
    private final static int BC_PORT = 37020; // 组播端口
    private final static int PACK_SIZE = 4096;

    public void init() throws IOException {
        MulticastSocket sock = new MulticastSocket(BC_PORT);
        InetAddress bcAddr = InetAddress.getByName(BC_IP);
        try (Scanner scan = new Scanner(System.in)) {
            // 创建socket并加入组播地址
            sock.joinGroup(bcAddr);
            sock.setLoopbackMode(false); // 必须是false才能开启广播功能！！

            new Thread(() -> { // 接受广播消息的线程
                try {
                    DatagramPacket inpack = new DatagramPacket(new byte[PACK_SIZE], PACK_SIZE);
                    while (true) {
                        sock.receive(inpack);
                        System.out.println("广播消息：" + new String(inpack.getData(), 0, inpack.getLength()));
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                    if (sock != null) {
                        try {
                            sock.leaveGroup(bcAddr);
                        } catch (Exception e1) {

                            e1.printStackTrace();
                        }
                        sock.close();
                    }
                    System.exit(1);
                }
            }).start();

            // 主线程接受控制台输入并广播出去
            DatagramPacket outpack = new DatagramPacket(new byte[0], 0, bcAddr, BC_PORT); // 目的端口和MulticastSocket端口一样！！
            while (scan.hasNextLine()) {
                byte[] buf = scan.nextLine().getBytes();
                outpack.setData(buf);
                sock.send(outpack);
            }
        }
        finally { // 最终关闭程序之前一定要关闭socket
            sock.close();
        }
    }

    public static void main(String[] args) throws NumberFormatException, IOException {

        new PlayTest().init();
    }
}
