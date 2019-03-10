package com.zzjz.utils;

import org.springframework.validation.FieldError;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class JsonRespWrapper {


	public static final int REQUEST_SUCCESS_CODE=200;
	public static final int REQUEST_ERROR_CODE=1000;
	public static final int REQUEST_APP_ERROR_CODE=2000;




	public static Object denied() {
		return error("没有权限.");
	}

	/**
	 * 只返回成功标志
	 * 
	 * @return
	 */
	public static Object success() {
		HashMap<String, Object> map =new HashMap<String, Object>();
		map.put("success", true);
		map.put("code", REQUEST_SUCCESS_CODE);
		return map;
	}

	/**
	 * 提示成功消息,审计增、删、改操作
	 *
	 * @return
	 */
	public static Object successAlert(String message) {
		//saveLog(message);
		return success(message, null);
	}
	/**
	 * 传递消息以及数据的操作审计,审计增、删、改操作
	 *
	 * @return
	 */
	public static Object successData(String message,Object redirectUrl) {
		//saveLog(message);
		return success(message, redirectUrl);
	}

	/**
	 * 成功，提示 并返回数据或者跳转，如果redirectUrl为空，不操作
	 * @param message
	 *            提示信息
	 * @param redirectUrl
	 *            可以是http打头，或是绝对路径以/开头
	 * @return
	 */
	public static Object success(String message, Object redirectUrl) {

		Map<String, Object> obj = (Map<String, Object>) success();
		obj.put("message", message);
		obj.put("data", redirectUrl);
		return obj;
	}



	/**
	 * 错误处理信息
	 * @param errorMessage
	 * @return
	 */
	public static Object error(String errorMessage) {

		return json("message", errorMessage, REQUEST_ERROR_CODE);
	}

	public static Object error(Map<String, String> errors) {
		return json("errors", errors, REQUEST_ERROR_CODE);
	}

	public static Object error(List<FieldError> errors) {
		Map<String, String> er = new LinkedHashMap<String, String>();
		for (FieldError fe : errors) {
			er.put(fe.getField(), fe.getDefaultMessage());
		}
		return json("errors", er, REQUEST_ERROR_CODE);
	}

	private static Object json(String key, Object value, int code) {
		HashMap<String, Object> map = new HashMap();
		map.put("success", false);
		map.put("code", code);
		if (key != null) {
			map.put(key, value);
		}
		return map;
	}

	private static Object json(List<String> key, List<String> value, boolean success) {
		HashMap<String, Object> map = new HashMap();
		map.put("success", success);
		if (key != null) {
			for (int i = 0; i < key.size(); i++) {
				map.put(key.get(i), value.get(i));
			}
		}
		return map;
	}

	/**
	 * 返回成功，并刷新父窗口
	 * 
	 * @param message
	 * @return
	 */
	public static Object successParentReload(String message) {
		return success(message, "javascript:window.parent.location.reload()");
	}
	private static void loggerError(Exception e){
		try
		{
			HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();

		}catch (Exception ex)
		{
		}
	}

	/**
	 * 异常出错信息
	 * @param e
	 * @param errorMessage
	 * @return
	 */
	public static Object exception(Exception e, String errorMessage){
		loggerError(e);
		//saveLog(errorMessage);
		return error(errorMessage);
	}
	/**
	 * 遍历request里面的参数键值对并返回遍历结果
	 *
	 * @param request
	 * @return String
	 */
	public static String getRequestParams(HttpServletRequest request) {
		Map<String, String[]> rMap = request.getParameterMap();
		StringBuffer sb = new StringBuffer();
		Set<String> keySet = rMap.keySet();
		for(String key : keySet){
			Object p = rMap.get(key);
			if(p instanceof String[]){
				sb.append(key).append(":").append("[");
				String[] arr = (String[]) p;
				for(String str : arr){
					sb.append(str).append(",");
				}
				sb.append("]");
			}else{
				sb.append(key).append(":").append(p).append(";");
			}
		}
		return sb.toString();
	}

}
