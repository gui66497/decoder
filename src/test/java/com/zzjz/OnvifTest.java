package com.zzjz;

import de.onvif.discovery.OnvifDiscovery;
import de.onvif.discovery.OnvifPointer;
import de.onvif.soap.OnvifDevice;
import org.apache.cxf.ws.discovery.WSDiscoveryClient;
import org.junit.Test;
import org.onvif.ver10.schema.Profile;
import org.onvif.ver10.schema.StreamSetup;

import javax.xml.soap.SOAPException;
import javax.xml.ws.EndpointReference;
import java.net.ConnectException;
import java.util.List;

/**
 * OnvifTest
 *
 * @author Administrator
 * @version 2017/11/6 14:28
 */
public class OnvifTest {

    @Test
    public void testFindAllDevices() {
        List<OnvifPointer> onvifPointers = OnvifDiscovery.discoverOnvifDevices();
        System.out.println(onvifPointers);
    }

    @Test
    public void testFind() {
        WSDiscoveryClient client = new WSDiscoveryClient();
        client.setVersion10(); // use WS-discovery 1.0
        client.setAddress("soap.udp://239.255.255.250:37020");
        client.setDefaultProbeTimeout(2000); // timeout 1s

        System.out.println("Probe:" + client.getAddress());
        List<EndpointReference> references = client.probe();

        System.out.println("Nb answsers:" + references.size());
        for (EndpointReference ref : references)
        {
            System.out.println(ref.toString());
        }
    }
    public static void main(String[] args) {
        try {
            OnvifDevice nvt = new OnvifDevice("192.168.1.191", "admin", "admin1234");
            List<Profile> profiles = nvt.getDevices().getProfiles();
            for (Profile profile : profiles) {
                // String profileToken = profiles.get(0).getToken();
                System.out.println(profile);
            }

            String profileToken = profiles.get(0).getToken();  //PROFILE_000

            StreamSetup streamSetup = new StreamSetup();

            String getSnapshotUri = nvt.getMedia().getSnapshotUri(profileToken);
            System.out.println(getSnapshotUri);

            System.out.println("getSnapshotUri:" + getSnapshotUri);
           /* String profileToken = profiles.get(0).getToken();  //PROFILE_000
            StreamSetup streamSetup = new StreamSetup();
            String getStreamUri = nvt.getMedia().getStreamUri(profileToken, streamSetup);
            System.out.println("getStreamUri:" + getStreamUri);
            System.out.println(nvt.getMedia().getVideoSources());
            System.out.println(1);*/
        }
        catch (ConnectException e) {
            e.printStackTrace();
            System.err.println("Could not connect to NVT.");
        }
        catch (SOAPException e) {
            e.printStackTrace();
        }

    }
}
