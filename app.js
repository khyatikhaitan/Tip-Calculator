const services=[0,0.20,0.10,0.02];

function calculateTip() {
  var bill_val = document.getElementById("bill-amount").value;
  var people = parseInt(document.getElementById("people").value);
  var service = document.getElementById("service-val");
  var service_val = service.options[service.selectedIndex].text;
  console.log(typeof bill_val);
  console.log(people);
  console.log(service_val);
  const feedback = document.querySelector('.feedback');
  feedback.innerHTML = '';
  let isFeedback=true;

  if (bill_val <= 0 || "") {
    feedback.classList.add('showItem', 'alert-danger');
    feedback.innerHTML += `<p>Bill amount cannot be blank or invalid</p>`;
    isFeedback=false;
  }
  if (people <= 0 || isNaN(people)) {
    feedback.classList.add('showItem', 'alert-danger');
    feedback.innerHTML += `<p>Number of users must be greater than zero</p>`;
    isFeedback=false;
  }
  /*if (service.selectedIndex == 0) {
    feedback.classList.add('showItem', 'alert-danger');
    feedback.innerHTML += `<p>You must select a Service</p>`;
    isFeedback=false;
  }*/
  if(isFeedback==true){
      var tip_amt= bill_val*services[service.selectedIndex];
      var total_amt=parseFloat(bill_val)+tip_amt;
      var split_amt=total_amt/people;
      console.log(typeof tip_amt);
      console.log(total_amt);
      console.log(split_amt);

      document.querySelector('.loader').classList.add('showItem');
       // show results after 2 seconds
       setTimeout(function(){
        document.querySelector('.loader').classList.remove('showItem');
        document.querySelector('#tip-amount').textContent= tip_amt.toFixed(2)
        document.querySelector('#total-amount').textContent= total_amt.toFixed(2)
        document.querySelector('#person-amount').textContent= split_amt.toFixed(2)
        document.querySelector('.results').classList.add('showItem');
      },2000)

      //clear values from DOM elements after 5 seconds
  }
}
