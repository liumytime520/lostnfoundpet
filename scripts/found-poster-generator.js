/**
 * Found Pet Poster Generator
 * Generates a formatted poster text for found pets that can be copied and pasted to social media
 */

function generatePoster() {
  const type = document.getElementById("petType").value;
  const location = document.getElementById("lastSeen").value;
  const contact = document.getElementById("contact").value;

  const output = `
    <h3> You may copy and past this poster to post in facebook groups. 
    This is just a general poster, you can make any addition you felt nessery.</h3>
      <p> A sweet <b>${type.toUpperCase()}</b> has been found near <b>${location.toUpperCase()}</b> , and it's clear they are dearly loved and missing their family. 
      They look lost and a little frightened, and we know someone must be heartbroken 
      without them. If you believe this may be your beloved <b>${type.toUpperCase()} </b>, 
      or if you have any information about their family, please reach out to us at <b>${contact}</b>. We are caring for them safely in the meantime, 
      but they deserve to be back home where they belong. 
      Please help us reunite this precious pet with the 
      people who love them most.</p>
      <p> REMEMBER TO INVOLVE A PICTURE WHEN POSTING</p>
    <p>. 
</p>
  `;

  document.getElementById("posterOutput").innerHTML = output;
}
