// import first_video from './assets/video/YOG_Video_2.mp4';
import { styles } from "./InitWizardStyle";
import first_video from './assets/video/YOG_Video_1.mp4';
import second_video from './assets/video/YOG_Video_2.mp4';
import third_video from './assets/video/YOG_Video_3.mp4';
import fourth_video from './assets/video/YOG_Video_4.mp4';


const title_1 = require('./assets/images/title-1.png')
const title_2 = require('./assets/images/title-2.png')
const title_3 = require('./assets/images/title-3.png')
const title_4 = require('./assets/images/title-4.png')

export default data = [
    {
      title: title_1,
      imgUrl: "https://picsum.photos/id/11/200/300",
      description: "Rispondi ad alcune domande per personalizzare la tua esperienza di Yoga Academy.",
      video: first_video,
      buttonTitle: ["Uomo", "Donna"],
      buttonDivStyle: styles.buttonDiv1,
      buttonStyle: styles.button1 ,
    },
    {
      title: title_2,
      description: "",
      video: second_video,
      buttonTitle: ["Base", "Intermedio", "Avanzato"],
      buttonDivStyle: styles.buttonDiv2,
      buttonStyle: styles.button2, 
    },
    {
      title: title_3,
      description: "",
      video: third_video,
      buttonTitle: ["Tonificare", "Alleviare lo stress", "Essere più flessibile"],
      buttonDivStyle: styles.buttonDiv2,
      buttonStyle: styles.button2 ,
    },
    {
      title: title_4,
      description: "",
      video: fourth_video,
      buttonTitle: ["Si, ho già la membership", "No, ne voglio sapere di più"],
      buttonDivStyle: styles.buttonDiv2,
      buttonStyle: styles.button2 ,
    }
  ]