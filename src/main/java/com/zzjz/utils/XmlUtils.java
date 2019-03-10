package com.zzjz.utils;


import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.dom4j.tree.DefaultDocument;

import java.util.Iterator;
import java.util.List;

/**
 * 功能：xml解析功能..
 * @author :  xuedong.cao
 * @version :1.0
 */
public class XmlUtils {

    public  static String xmlToString() {
        // 字符串转XML
        Document document = new DefaultDocument();
        String text = document.asXML();
        return text;
    }

    public static Document stringToxml(String xmlString){
        try {
            Document document = DocumentHelper.parseText(xmlString);

            return  document;
        } catch (DocumentException e) {
            e.printStackTrace();
        }
        return null;
    }

   /* public static void main(String[] args) {
        String status="<?xml version=\"1.0\" encoding=\"UTF-8\"?><StreamInfo><GetStreamMode>active</GetStreamMode><PassiveModeInfo><TransmitProtocol>tcp</TransmitProtocol><Port>0</Port></PassiveModeInfo><ActiveModeInfo><DecodeMode>dynamic</DecodeMode><DynamicDecodeCfg><DecodeCfgType>VIA_IP</DecodeCfgType><MediaCenterCfg><Enable>true</Enable><MediaIPAddress>192.168.1.121</MediaIPAddress><MediaPort>8080</MediaPort><MediaTransmitProtocol>tcp</MediaTransmitProtocol></MediaCenterCfg><EncodeChanCfg><EncodeIPAddress>192.168.1.192</EncodeIPAddress><EncodePort>8000</EncodePort><EncodeTransmitProtocol>tcp</EncodeTransmitProtocol><EncodeChanMode>normal</EncodeChanMode><EncodeChanID>1</EncodeChanID><EncodeChanType>main</EncodeChanType><FactoryDefine>0</FactoryDefine><EncodeStreamID></EncodeStreamID><Username>admin</Username><Password>admin12345</Password></EncodeChanCfg></DynamicDecodeCfg><FileName></FileName><TimeRange><BeginTime>0-0-0 0:0:0</BeginTime><EndTime>0-0-0 0:0:0</EndTime></TimeRange></ActiveModeInfo></StreamInfo>\n";


       Document document = stringToxml(status);
        Element element=document.getRootElement();
        Iterator iter= element.elementIterator("ActiveModeInfo");

       while (iter.hasNext()){
           Element recordEle = (Element) iter.next();
           if(recordEle.getText().equals("ActiveModeInfo")){
               Iterator iters= element.elementIterator()
               while ()
           }
       }
        element.content();





    }*/

}
