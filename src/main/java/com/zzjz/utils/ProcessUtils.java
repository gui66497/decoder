package com.zzjz.utils;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

/**
 * @author 房桂堂
 * @description ProcessUtils
 * @date 2017/11/24 9:41
 */
public class ProcessUtils {

    /**
     * 运行一个外部命令，返回状态.若超过指定的超时时间，抛出TimeoutException
     * @param command
     * @param timeout
     * @return
     * @throws IOException
     * @throws InterruptedException
     * @throws TimeoutException
     */
    public static Process executeCommand(final String command, final long timeout) throws IOException, InterruptedException, TimeoutException {
        Process process = Runtime.getRuntime().exec(command);
        Worker worker = new Worker(process);
        worker.start();
        try {
            worker.join(timeout);
            if (worker.exit != null){
                /*return worker.exit;*/
                return process;
            } else{
                throw new TimeoutException("连接超时");
            }
        } catch (InterruptedException ex) {
            worker.interrupt();
            Thread.currentThread().interrupt();
            throw ex;
        } finally {
            process.destroy();
        }
    }


    private static class Worker extends Thread {
        private final Process process;
        private Integer exit;

        private Worker(Process process) {
            this.process = process;
        }

        @Override
        public void run() {
            try {
                exit = process.waitFor();
            } catch (InterruptedException ignore) {
                return;
            }
        }
    }
}
