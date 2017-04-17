export function camelToSpacedProper(str){
    var processCasing = str => {
        var result = str.replace(/(A-Z)/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    }
    
    return str ? processCasing(str) : "";
}