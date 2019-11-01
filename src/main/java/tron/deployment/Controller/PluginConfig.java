package tron.deployment.Controller;

import static common.Util.readJsonFile;
import static common.Util.writeJsonFile;

import common.Common;
import common.ResultCode;
import java.util.ArrayList;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import response.Response;

@CrossOrigin
@RestController
@Component
@RequestMapping(value = "/")
public class PluginConfig {
  @RequestMapping(method = RequestMethod.POST, value = "/consensus")
  public JSONObject consensus(
      @RequestParam(value = "consensus", required = false, defaultValue = "dpos") String consensus
  ){
    JSONObject json = readJsonFile();
    json.put(Common.consensusFileName, consensus);
    if (!writeJsonFile(json)) {
      return new Response(ResultCode.INTERNAL_SERVER_ERROR.code, "write json file failed").toJSONObject();
    }
    return new Response(ResultCode.OK_NO_CONTENT.code, "").toJSONObject();
  }

  @RequestMapping(method = RequestMethod.POST, value = "/transaction")
  public JSONObject transaction(
      @RequestBody ArrayList<String> transactions
  ){
    JSONObject json = readJsonFile();
    json.put(Common.transactionFileName, transactions);
    if (!writeJsonFile(json)) {
      return new Response(ResultCode.INTERNAL_SERVER_ERROR.code, "write json file failed").toJSONObject();
    }
    return new Response(ResultCode.OK_NO_CONTENT.code, "").toJSONObject();
  }

  @RequestMapping(method = RequestMethod.POST, value = "/dbEngine")
  public JSONObject dbEngine(
      @RequestParam(value = "dbEngine", required = false, defaultValue = "leveldb") String dbEngine
  ){
    JSONObject json = readJsonFile();
    json.put(Common.dbEngineFileName, dbEngine);
    if (!writeJsonFile(json)) {
      return new Response(ResultCode.INTERNAL_SERVER_ERROR.code, "write json file failed").toJSONObject();
    }
    return new Response(ResultCode.OK_NO_CONTENT.code, "").toJSONObject();
  }

  @RequestMapping(method = RequestMethod.GET, value = "/pluginConfig")
  public JSONObject pluginConfig() {
    JSONObject json = readJsonFile();
    JSONObject result = new JSONObject();
    result.put(Common.consensusFileName, json.get(Common.consensusFileName));
    result.put(Common.transactionFileName, json.get(Common.transactionFileName));
    result.put(Common.dbEngineFileName, json.get(Common.dbEngineFileName));
    return result;
  }
}