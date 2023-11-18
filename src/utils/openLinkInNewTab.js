export default function openLinkInNewTab(url){
    const link = document.createElement("a")
    link.setAttribute('target', '_blank');
    link.setAttribute('href',url);
    link.click()
}