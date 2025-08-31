/**
 * Lost Pet Poster Generator
 * Generates a formatted poster text for lost pets that can be copied and pasted to social media
 */

function generatePoster() {
  const name = document.getElementById("petName").value;
  const type = document.getElementById("petType").value;
  const location = document.getElementById("lastSeen").value;
  const contact = document.getElementById("contact").value;
  const reward = document.getElementById("reward").value;

  const output = `
  <h3> You may copy and past this poster to post in facebook groups. 
    This is just a general poster, you can make any addition you felt nessery.</h3>
    <p>Our beloved <b>${name.toUpperCase()}</b> , a cherished <b>${type.toUpperCase()}</b>
      , has gone missing near <b>${location.toUpperCase()}</b> . They are more than 
      just a pet to us — they are family, and every moment 
      without them feels unbearable. We are desperate to bring 
      them home safe, and we kindly ask for your help in keeping 
      an eye out. If you see <b>${name.toUpperCase()}</b>, please contact us 
      immediately at <b>${contact.toUpperCase()}</b>. Any information, no matter 
      how small, could be what reunites us. 
      A <b>${reward.toUpperCase() ? reward : "No reward specified"}</b> dollar is being 
      offered for their safe return. Please help us bring our 
      precious <b>${name.toUpperCase()}</b> back where they belong — in the arms of their family. </p>
    <p>Again! If you have any information, please help us bring <b>${name.toUpperCase()}</b> home!</p>
    <p> REMEMBER TO INVOLVE A PICTURE WHEN POSTING </p>
  `;

  document.getElementById("posterOutput").innerHTML = output;
}
