package com.zzjz;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.net.MulticastSocket;
import java.util.ArrayList;
import java.util.List;

/**
 * 功能：
 * @author :  xuedong.cao
 * @version :1.0
 */
public class PlayCtrl {

    private final static String BC_IP = "239.255.255.250"; // 组播地址
    private final static int BC_PORT = 37020; // 组播端口
    private final static int PACK_SIZE = 4096;
    private volatile boolean  keepListen = true;

    public void init() throws IOException {

        MulticastSocket sock = new MulticastSocket(BC_PORT);
        InetAddress bcAddr = InetAddress.getByName(BC_IP);

        List<String> resList = new ArrayList<>();
        // 创建socket并加入组播地址
        sock.joinGroup(bcAddr);
        sock.setLoopbackMode(false); // 必须是false才能开启广播功能！！

        new Thread(() -> { // 接受广播消息的线程
            try {
                DatagramPacket inpack = new DatagramPacket(new byte[PACK_SIZE], PACK_SIZE);
                while (keepListen) {
                    sock.receive(inpack);
                    System.out.println("广播消息：" + new String(inpack.getData(), 0, inpack.getLength()));
                    resList.add(new String(inpack.getData(), 0, inpack.getLength()));
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

        byte[] buf1 = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Probe><Uuid>C50970A5-90DA-4911-A559-015BA4BEB6A3</Uuid><Types>inquiry</Types></Probe>".getBytes();
        DatagramPacket outpack = new DatagramPacket(buf1, buf1.length, bcAddr , BC_PORT);
        sock.send(outpack);
        /*finally { // 最终关闭程序之前一定要关闭socket
            sock.close();
        }*/

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        keepListen = false;
        sock.send(outpack);
    }
    public static void main(String[] args) {
        try {
            new PlayCtrl().init();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}


