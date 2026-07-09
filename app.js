const $ = id => document.getElementById(id);

let employees = [];
let entries = [];
let loggedEmployee = null;

function toast(msg){
  $("toast").textContent = msg;
  $("toast").classList.remove("hidden");
  setTimeout(() => $("toast").classList.add("hidden"), 2300);
}

function today(){
  return new Date().toISOString().slice(0,10);
}

function fmt(v){
  if(!v) return "";
  return new Date(v).toLocaleString("is-IS", {
    day:"2-digit",
    month:"2-digit",
    year:"numeric",
    hour:"2-digit",
    minute:"2-digit"
  });
}

function hoursBetween(start,end){
  if(!start || !end) return 0;
  return Math.max(0,(new Date(end)-new Date(start))/1000/60/60);
}

function csvEscape(v){
  return `"${String(v ?? "").replaceAll('"','""')}"`;
}

function downloadCSV(filename, header, rows){
  const blob = new Blob(
    ["\ufeff" + header.join(";") + "\n" + rows.join("\n")],
    {type:"text/csv;charset=utf-8"}
  );
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

async function sha256(text){
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash
