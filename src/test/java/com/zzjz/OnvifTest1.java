package com.zzjz;


/**
 * @author attilax
 * 2016年12月21日 下午10:38:11
 */

import java.io.IOException;
import java.net.ConnectException;
import java.util.List;

import javax.xml.soap.SOAPException;

import org.onvif.ver10.media.wsdl.GetStreamUri;
import org.onvif.ver10.media.wsdl.GetStreamUriResponse;
import org.onvif.ver10.schema.Profile;
import org.onvif.ver10.schema.StreamSetup;
import org.onvif.ver10.schema.Transport;

import de.onvif.soap.OnvifDevice;

public class OnvifTest1 {
    public static void main(String[] args) {
        // org.apache.commons.codec.binary.Base64
        // org.apache.commons.codec.binary.Base64
        try {
            // OnvifDevicenvt = new OnvifDevice("192.168.0.20", "admin",
            // "password");
            OnvifDevice nvt = new OnvifDevice("192.168.31.144:10080", "", "");
            List<Profile> profiles = nvt.getDevices().getProfiles();
            for (Profile profile : profiles) {
                // String profileToken = profiles.get(0).getToken();
                System.out.println(profile);
            }

            // System.out.println("Snapshot URI: "+nvt.getMedia().getSnapshotUri(profileToken));
            String profileToken = profiles.get(0).getToken();  //PROFILE_000
            StreamSetup streamSetup = new StreamSetup();
            String getStreamUri = nvt.getMedia().getStreamUri(profileToken, streamSetup);
            System.out.println("getStreamUri:" + getStreamUri);
        } catch (ConnectException e) {
            System.err.println("Could not connect to NVT.");
        } catch (SOAPException e) {
            e.printStackTrace();
        }
    }
}
 
 
 
 