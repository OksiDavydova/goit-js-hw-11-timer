import './sass/main.scss';

class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate=targetDate;
    this.idInterval = null;
    // this.startTimer();
    // this.startTimer= this.startTimer.bind(this);
  }
  getRefs(){
    const container = document.querySelector(this.selector);
    const daysRef = container.querySelector('[data-value="days"]');
    const hoursRef = container.querySelector('[data-value="hours"]');
    const minsRef = container.querySelector('[data-value="mins"]');
    const secsRef = container.querySelector('[data-value="secs"]');
    // const btnRef = document.querySelector('.btn');
        return {container, daysRef, hoursRef, minsRef, secsRef};//btnRef
  }
//btnRef
  updateTimer({container, daysRef, hoursRef, minsRef, secsRef}){
// btnRef.addEventListener('click', this.startTimer);
    const time = this.targetDate - Date.now();

   if (time < 0) {
     clearInterval(this.idInterval);
     container.innerHTML = `<h1 class="text">Time is over</h1>`;
    //  btnRef.removeEventListener('click', this.startTimer);
     return;
   }

    daysRef.textContent = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2,'0');
    hoursRef.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2,'0');
    minsRef.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,'0');
    secsRef.textContent = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2,'0');


  }

  startTimer() {
    // console.log(this);
    this.idInterval= setInterval(() => {
      this.updateTimer(this.getRefs());
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021 24:00'),
});
// const timer2 = new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Oct 3, 2021'),
// });
timer.updateTimer(timer.getRefs());
timer.startTimer();


