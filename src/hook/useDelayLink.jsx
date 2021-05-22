import { useHistory } from "react-router";

export default function useDelayLink() {
  let history = useHistory()

  function delayLink(e){
    e.preventDefault();
    let href = e.currentTarget.getAttribute('href')
    setTimeout(()=>{
      if(document.body.classList.contains('menu-is-show')){
        document.body.classList.remove('menu-is-show')
        history.push(href)
      }else{
        history.push(href)
      }
    },100)
  }

  return delayLink
}