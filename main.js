const news=[
     {
         // always update the text inside back tick 
         // never touch the back tick
         // please never use more than 80 word in text section
         // if there is more information you want to place here make sure you add it to the more text section
    text: ` 
    
    It is found necessary to establish Attorney General Institution for the respect of the constitutional
    and legal system in the region and for ensuring rule of law and protection of basic rights and freedoms of
    citizens enshrined in the constitution
    so it is important to establish Attorney General Office Of Oromia Regional state .NOW, THEREFORE,proclamation
    No.214/2018 is proclaimed. 
    
   
    `,
    //place here detail of your news
    moreText: ` WHEREAS, it is found necessary to establish Attorney General Institution for the respect of the constitutional
    and legal system in the region and for ensuring rule of law and protection of basic rights and freedoms of
    citizens enshrined in the constitution
    so it is important to establish Attorney General Office Of Oromia Regional state .NOW, THEREFORE,proclamation
    No.214/2018 is proclaimed .
    Accordingly Daaroo Labuu attorney office, Starting from 2013 established result based planning. By doing so is
    the office is working on constructing justice system that make sure of the realization of over mentioned aims
    .
    The plan have 3 categories of goals set to be achieved : four general goals, four medial goals and 18
    immediate goals `,

   }
]


 document.getElementById("news").innerHTML=`

    ${news.map(function(feed){
        return `<p class="news-text">
        ${feed.text}
        </p>`
    }).join(' ')}
  `
  //dialog texts
  document.getElementById("modal-news").innerHTML=`

  ${news.map(function(more){
      return `  <p id="main-news">
      ${more.text}
      
      </p>

      <p id="more-Text">
           ${more.moreText}
      </p>
     `
  }).join(' ')}

`
// forms




  const forms=[
        // if there is form paste the link inside the back tick found below
          /* if you want to place more than one form copy and paste the code below inside the parethensis
             and place the link of you second form
         */


             // to place form on your website 
             //first delete back slash and astericks below and 
             // delete the astericks and back slash found below form object
      /* {
          form:` there is no form yet   `,
        
      },
      
  */
  ]




// the dom elements
//if place the form link in json make sure you deleted "There is no form yet" text found below

  document.getElementById("form").innerHTML=`
  There is no form yet!
  ${forms.map(function(userform){
      return `<a href="${userform.form}">
      there is no form yet!
      </a><br/>`
  }).join(' ')}
`
var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();
