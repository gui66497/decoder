package com.zzjz.utils;


import com.sun.org.apache.xml.internal.security.utils.Base64;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PutMethod;
import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.URL;
import java.net.URLConnection;

/**
 * 功能：HTTP使用处理类.
 * @author :  xuedong.cao
 * @version :1.0
 */
public class HttpUtils {

    private static String decoderUrl = "http://192.168.1.65/PSIA/Custom/SelfExt/Decode/decodeChannels/1/dynamicDecode/start";

    private static  String loginUrl = "http://192.168.1.65/page/cn/login.asp";

    /**
     * 编码.
     */
    public static final String CHARSET = "UTF-8";

    private static final CloseableHttpClient HTTP_CLIENT;

    static {
        RequestConfig config = RequestConfig.custom().setConnectTimeout(10000).setSocketTimeout(10000).build();
        HTTP_CLIENT = HttpClientBuilder.create().setDefaultRequestConfig(config).build();
    }

    public static void main(String[] args)throws Exception
    {
        //创建UDP socket，建立端点
        DatagramSocket ds = new DatagramSocket(37020);  //监听10000端口

        //定义数据包，用于存储数据
        byte[] buf = new byte[1024];
        DatagramPacket dp = new DatagramPacket(buf,buf.length);

        ds.receive(dp);

        String ip = dp.getAddress().getHostAddress();   //数据提取
        String data = new String(dp.getData(),0,dp.getLength());
        int port = dp.getPort();
        System.out.println(data+"."+port+".."+ip);
        ds.close();
    }



    /**
     * 发送xml数据请求到server端
     * @param url xml请求数据地址
     * @param xmlString 发送的xml数据流
     * @return null发送失败，否则返回响应内容
     */
    @Deprecated
    public static String post2(@RequestParam("url") String url, String xmlString , String authorString) throws IOException {
        //关闭
        System.setProperty("org.apache.commons.logging.Log", "org.apache.commons.logging.impl.SimpleLog");
        System.setProperty("org.apache.commons.logging.simplelog.showdatetime", "true");
        System.setProperty("org.apache.commons.logging.simplelog.log.org.apache.commons.httpclient", "stdout");

        //创建httpclient工具对象
        HttpClient client = new HttpClient();
        //创建post请求方法
        PutMethod myPost = new PutMethod(url);
        //设置请求超时时间
        client.setConnectionTimeout(3 * 1000);
        String responseString = null;

            //设置请求头部类型
            myPost.setRequestHeader("Content-Type","application/xml");
            myPost.setRequestHeader("charset","utf-8");
            if(!StringUtils.isEmpty(authorString)){
                myPost.setRequestHeader("Authorization",authorString);
            }

            //设置请求体，即xml文本内容，注：这里写了两种方式，一种是直接获取xml内容字符串，一种是读取xml文件以流的形式
            myPost.setRequestBody(xmlString);
          /*  InputStream body=this.getClass().getResourceAsStream("/"+xmlFileName);
            myPost.setRequestBody(body);*/
//            myPost.setRequestEntity(new StringRequestEntity(xmlString,"text/xml","utf-8"));
            int statusCode = client.executeMethod(myPost);
            if(statusCode == HttpStatus.SC_OK){
                BufferedInputStream bis = new BufferedInputStream(myPost.getResponseBodyAsStream());
                byte[] bytes = new byte[1024];
                ByteArrayOutputStream bos = new ByteArrayOutputStream();
                int count = 0;
                while((count = bis.read(bytes))!= -1){
                    bos.write(bytes, 0, count);
                }
                byte[] strByte = bos.toByteArray();
                responseString = new String(strByte,0,strByte.length,"utf-8");
                bos.close();
                bis.close();
            }

        myPost.releaseConnection();
        return responseString;
    }

    /**
     * 发送xml数据请求到server端(put类型)
     * @param url xml请求数据地址
     * @param xmlString 发送的xml数据流
     * @return null发送失败，否则返回响应内容
     */
    public static String put(@RequestParam("url") String url, String xmlString , String authorString) throws IOException {
        //创建put请求方法
        HttpPut put = new HttpPut(url);

        String responseString = null;
        put.setHeader("Content-Type","application/xml");
        put.setHeader("charset","utf-8");
        if (!StringUtils.isEmpty(authorString)) {
            put.setHeader("Authorization", authorString);
        }

        StringEntity stringEntity = new StringEntity(xmlString, "utf-8");
        put.setEntity(stringEntity);
        CloseableHttpResponse response = HTTP_CLIENT.execute(put);
        int statusCode = response.getStatusLine().getStatusCode();
        if (statusCode != 200) {
            put.abort();
            throw new RuntimeException("HttpClient,error status code :" + statusCode);
        }
        HttpEntity entity = response.getEntity();
        BufferedInputStream bis = new BufferedInputStream(entity.getContent());
        byte[] bytes = new byte[1024];
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        int count = 0;
        while((count = bis.read(bytes))!= -1){
            bos.write(bytes, 0, count);
        }
        byte[] strByte = bos.toByteArray();
        responseString = new String(strByte,0,strByte.length,"utf-8");
        bos.close();
        bis.close();
        EntityUtils.consume(entity);
        response.close();
        return responseString;
    }

    /**
     * 发送xml数据请求到server端(post类型)
     * @param url xml请求数据地址
     * @param xmlString 发送的xml数据流
     * @return null发送失败，否则返回响应内容
     */
    public static String post(@RequestParam("url") String url, String xmlString , String authorString) throws IOException {

        //创建post请求方法
        HttpPut post = new HttpPut(url);

        String responseString = null;
        post.setHeader("Content-Type","application/xml");
        post.setHeader("charset","utf-8");
        if (!StringUtils.isEmpty(authorString)) {
            post.setHeader("Authorization", authorString);
        }
        StringEntity stringEntity = new StringEntity(xmlString, "utf-8");
        post.setEntity(stringEntity);
        CloseableHttpResponse response = HTTP_CLIENT.execute(post);
        int statusCode = response.getStatusLine().getStatusCode();
        if (statusCode != 200) {
            post.abort();
            throw new RuntimeException("HttpClient,error status code :" + statusCode);
        }
        HttpEntity entity = response.getEntity();
        BufferedInputStream bis = new BufferedInputStream(entity.getContent());
        byte[] bytes = new byte[1024];
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        int count = 0;
        while((count = bis.read(bytes))!= -1){
            bos.write(bytes, 0, count);
        }
        byte[] strByte = bos.toByteArray();
        responseString = new String(strByte,0,strByte.length,"utf-8");
        bos.close();
        bis.close();
        EntityUtils.consume(entity);
        response.close();
        return responseString;
    }

    /**
     * 发送xml数据请求到server端(get类型)
     * @param url xml请求数据地址
     * @return null发送失败，否则返回响应内容
     */
    public static String get(String url, String authorString) throws IOException {

        String responseString;
        HttpGet httpGet = new HttpGet(url);

        httpGet.setHeader("Content-Type", "application/xml");
        httpGet.setHeader("charset", "utf-8");
        if(!StringUtils.isEmpty(authorString)){
            httpGet.setHeader("Authorization", authorString);
        }
        CloseableHttpResponse response = null;
        response = HTTP_CLIENT.execute(httpGet);
        int statusCode = response.getStatusLine().getStatusCode();
        if (statusCode != 200) {
            httpGet.abort();
            throw new RuntimeException("HttpClient,error status code :" + statusCode);
        }
        HttpEntity entity = response.getEntity();
        BufferedInputStream bis = new BufferedInputStream(entity.getContent());
        byte[] bytes = new byte[1024];
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        int count = 0;
        while((count = bis.read(bytes))!= -1){
            bos.write(bytes, 0, count);
        }
        byte[] strByte = bos.toByteArray();
        responseString = new String(strByte,0,strByte.length,"utf-8");
        bos.close();
        bis.close();
        EntityUtils.consume(entity);
        response.close();
        return responseString;
    }

    /**
     * 发送xml数据请求到server端
     * @param url xml请求数据地址
     * @return null发送失败，否则返回响应内容
     */
    @Deprecated
    public static String get2(String url,String authorString){
        //关闭
        System.setProperty("org.apache.commons.logging.Log", "org.apache.commons.logging.impl.SimpleLog");
        System.setProperty("org.apache.commons.logging.simplelog.showdatetime", "true");
        System.setProperty("org.apache.commons.logging.simplelog.log.org.apache.commons.httpclient", "stdout");

        //创建httpclient工具对象
        HttpClient client = new HttpClient();
        //创建post请求方法
        GetMethod myPost = new GetMethod(url);
        //设置请求超时时间
        client.setConnectionTimeout(30*1000);
        String responseString = null;
        try{
            //设置请求头部类型
            myPost.setRequestHeader("Content-Type","application/xml");
            myPost.setRequestHeader("charset","utf-8");
            if(!StringUtils.isEmpty(authorString)){
                myPost.setRequestHeader("Authorization",authorString);
            }

            //设置请求体，即xml文本内容，注：这里写了两种方式，一种是直接获取xml内容字符串，一种是读取xml文件以流的形式

          /*  InputStream body=this.getClass().getResourceAsStream("/"+xmlFileName);
            myPost.setRequestBody(body);*/
//            myPost.setRequestEntity(new StringRequestEntity(xmlString,"text/xml","utf-8"));
            int statusCode = client.executeMethod(myPost);
            if(statusCode == HttpStatus.SC_OK){
                BufferedInputStream bis = new BufferedInputStream(myPost.getResponseBodyAsStream());
                byte[] bytes = new byte[1024];
                ByteArrayOutputStream bos = new ByteArrayOutputStream();
                int count = 0;
                while((count = bis.read(bytes))!= -1){
                    bos.write(bytes, 0, count);
                }
                byte[] strByte = bos.toByteArray();
                responseString = new String(strByte,0,strByte.length,"utf-8");
                bos.close();
                bis.close();
            }
        }catch (Exception e) {
            e.printStackTrace();
        }
        myPost.releaseConnection();
        return responseString;
    }



    /**
     * 用传统的URI类进行请求
     * @param urlStr
     */
    public void testPost(String urlStr) {
        try {
            URL url = new URL(urlStr);
            URLConnection con = url.openConnection();
            con.setDoOutput(true);
            con.setRequestProperty("Pragma:", "no-cache");
            con.setRequestProperty("Cache-Control", "no-cache");
            con.setRequestProperty("Content-Type", "text/xml");

            OutputStreamWriter out = new OutputStreamWriter(con.getOutputStream());
            String xmlInfo = getXmlInfo();
            System.out.println("urlStr=" + urlStr);
//            System.out.println("xmlInfo=" + xmlInfo);
            out.write(new String(xmlInfo.getBytes("UTF-8")));
            out.flush();
            out.close();
            BufferedReader br = new BufferedReader(new InputStreamReader(con
                    .getInputStream()));
            String line = "";
            for (line = br.readLine(); line != null; line = br.readLine()) {
                System.out.println(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private  String getXmlInfo() {
        return "<?xml version='1.0' encoding='utf-8'?><DynamicDecodeCfg><DecodeCfgType>VIA_IP</DecodeCfgType><MediaCenterCfg><Enable>true</Enable><MediaIPAddress>192.168.1.111</MediaIPAddress><MediaPort>8080</MediaPort><MediaTransmitProtocol>tcp</MediaTransmitProtocol></MediaCenterCfg><EncodeChanCfg><EncodeIPAddress>192.168.1.181</EncodeIPAddress><EncodePort>8000</EncodePort><EncodeChanMode>normal</EncodeChanMode><EncodeChanID>1</EncodeChanID><EncodeTransmitProtocol>tcp</EncodeTransmitProtocol><EncodeChanType>main</EncodeChanType><Username>admin</Username><Password>admin12345</Password><FactoryDefine>0</FactoryDefine></EncodeChanCfg></DynamicDecodeCfg>";
    }

    /**
     * 加密方式 Basic +Base64(username:password).
     * @param userName 用户名
     * @param passWord 密码
     * @return 结果
     */
    public static String getAuthorization(String userName, String passWord) {
        return Base64.encode( (userName+":" + passWord).getBytes());
    }

}
