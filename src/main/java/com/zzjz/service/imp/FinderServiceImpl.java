package com.zzjz.service.imp;

import com.zzjz.service.FinderService;
import org.apache.cxf.ws.discovery.WSDiscoveryClient;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.springframework.stereotype.Service;
import javax.xml.ws.EndpointReference;
import java.util.ArrayList;
import java.util.List;

/**
 * FinderServiceImpl
 *
 * @author Administrator
 * @version 2017/11/14 10:51
 */
@Service
public class FinderServiceImpl implements FinderService {

    @Override
    public List<String> findOnvifDevices() throws DocumentException {

        WSDiscoveryClient client = new WSDiscoveryClient();
        client.setVersion10(); // use WS-discovery 1.0
        client.setDefaultProbeTimeout(2000); // timeout 2s

        System.out.println("Probe:" + client.getAddress());
        List<EndpointReference> references = client.probe();

        System.out.println("Nb answsers:" + references.size());
        List<String> res = new ArrayList<>();
        for (EndpointReference ref : references)
        {
            System.out.println(ref.toString());
            Document doc = DocumentHelper.parseText(ref.toString());
            Element root = doc.getRootElement();
            String address = root.element("Address").getStringValue();
            res.add(address);
        }
        System.out.println(res);
        return res;
    }
}
