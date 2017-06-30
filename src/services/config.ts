export namespace Singleton {
    var host = "http://192.168.0.101:9080/";
    
    export function getHost() { return host; }
    export function setHost(value) { host = value; }
}