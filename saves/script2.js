* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(360deg ,#0c3b5a 0%, #136958 100%);
  overflow: hidden;
  animation: gradient 10s ease infinite;
  color: #fff;
  padding: 0 20px;
  background-size: 400% 400%;
  background-attachment: fixed;
}

@keyframes gradient {
  0%{
    background-position: 0% 0%;
  }
  50%{
    background-position: 100% 100%;
  }
  100%{
    background-position: 0% 0%;
  }
}

.intro{
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100vh;
  z-index: 100;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.leftside , .rightside{
  position: relative;
  width: 50%;
  height: 100vh;
  z-index: 99;
  transition: transform 1s linear, opacity 0.2s linear;
}

.leftside {
  background: linear-gradient(360deg ,#0c3b5a, #1369584b), url(left.png);
  margin-left: 1px;
}

.rightside {
  background: linear-gradient(360deg ,#0c3b5a, #1369584b), url(right.png);
}

.leftside , .rightside{
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1;
}

.wave {
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  animation: wave 10s -3s linear infinite;
  opacity: 0.8;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.wave:nth-of-type(2){
  bottom: -1.25em;
  animation: wave 13s linear reverse infinite;
  opacity: 0.8;
}
.wave:nth-of-type(3){
  bottom: -2.5em;
  animation: wave 18s -1s reverse infinite;
  opacity: 0.9;
}


@keyframes wave {
  0% {
    transform: translateX(0);
  }
  25%{
    transform: translateX(-25%);
  }
  50%{
    transform: translateX(-50%);
  }
  75%{
    transform: translateX(-25%);
  }
  100%{
    transform: translateX(0);
  }
}

.container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  background-color: #ecf0f1;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  opacity: 0.9;
} 

.search-section {
  width: 50%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0c3b5a, #136958); 
  color: #fff;
  padding: 40px;
  text-align: center;
  border-right: 2px solid #16a085; 
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 25px;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(44, 62, 80, 0.7); 
}

.search-box {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.search{
  width: 100%;
  display: flex;
  flex-direction: row;
}

.search-input {
  padding: 12px;
  font-size: 18px;
  width: 100%;
  border: 1px solid #2980b9;
  border-radius: 10px 0px 0px 10px;
  background-color: #ffffff;
  color: #34495e; 
  transition: all 0.3s ease-in-out;
  direction: rtl;
}

.search-input:focus {
  border-color: #1abc9c;
  box-shadow: 0 0 8px rgba(26, 188, 156, 0.4);
  outline: none;
}

button {
  width: 50%;
  padding: 12px 24px;
  font-size: 18px;
  background-color: #2980b9;
  color: #fff;
  border: none;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  background-color: #1abc9c;
}

button:active{
  background-color: #2980b9;
}

a{
  color: white;
  text-decoration: none;
}

.all-Books-btn{
  width: 100%;
  background-color: #297fb941;
  border-radius: 20px;
}

.intro-button{
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  top: 80%;
  z-index: 100;
  width: 13%;
  background-color: #045B89;
  border-radius: 20px;
}

.intro-button:hover {
  background-color: #0F2332;
}

.intro-button:active{
  background-color: #045B89;
}

.details-box{
  height: 50%;
  width: 100%;
  display: flex;
  margin-top: 5%;
}

.intro-text , h4{
  text-align: justify;
  direction: rtl;
}

h4{
text-align: center;
}

h3{
  margin-bottom: 5%;
}

.intro-text{
  margin-bottom: 5%;
}

.result-section {
  width: 50%;
  background-color: #ecf0f1; 
  padding: 40px;
  color: #2c3e50; 
  overflow-y: auto;
  font-size: 16px;
  border-left: 2px solid #2980b9; 
  display: flex;
  justify-content: center;
}

#result {
  text-align: justify;
  direction: rtl;
  color: #34495e;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.result-text{
  transition: 0.2s;
  cursor: pointer;
}

.result-text:hover{
  color:rgb(96, 149, 202);
}

.result-text:active{
  color: rgb(39, 63, 87);
}
.book-details{
  display: flex;
  flex-direction: column;
}

.selected-book-title, .selected-book-image, .selected-book-description{
  direction: rtl;
  align-self: center;
}


.selected-book-title{
  height: 5%;
  margin-bottom: 5%;
}

.img-place-holder{
  width: 100%;
  height: 60%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selected-book-image{
  height: 100%;
  width: 70%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
}

.selected-book-description{
  height: 40%;
  text-align: justify;
}

#backToTop {
  z-index: -1;
  opacity: 0;
}



@media (max-width: 768px) {
  
  body{
    overflow: hidden;
    overflow-x: hidden;
    padding-bottom: auto;
    background: unset;
  }

  .wave {
    display: none;
  }
  
  .wave:nth-of-type(2){
    display: none;
  }
  .wave:nth-of-type(3){
    display: none;
  }

  .intro{
    position: absolute;
    top: 0%;
    height: 100vh;
  }
  
  .leftside , .rightside{
    height: 100vh;
  }

  .container {
    height: 100%;
    flex-direction: column;
    overflow: scroll;
    position: fixed;
    top: 0;
    bottom: 0;
    border-radius: unset;
    box-shadow: unset;
    display: unset;
  }

  .search-section {
    border-right: unset; 
  }

  .search-input {
    font-size: 15px;
  }

  .result-section{
    overflow: visible;
  }

  .search-section, .result-section {
    width: 100%;
    height: auto;
  }
 
  .result-section {
    border-left: unset; 
  }

  .intro-button{
    width: auto;
  }

  .img-place-holder{
    width: 100%;
    height: 60%;
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .selected-book-image{
    height: 100%;
    width: 70%;
    display: unset;
    justify-self: unset;
    align-self: unset;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  }

  #backToTop {
    z-index: 99;
    opacity: 1;
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: #0D405A;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    opacity: 0.5;
    transition: opacity 0.3s,background-color 0.2s ;
  }
  
  #backToTop:hover {
    background-color: #136658;
    opacity: 1;
  }

  #backToTop:active {
    background-color: #0D415A;
  }

}

@media only screen and (min-width: 1100px) {
  .leftside , .rightside{
    position: relative;
    width: 50%;
    height: 100%;
    z-index: 99;
    transition: transform 1s linear , opacity 0.2s linear;
  }
  
  .leftside {
    background: linear-gradient(360deg ,#0c3b5a, #1369584b), url(Untitled-1.1.png);
  }
  
  .rightside {
    background: linear-gradient(360deg ,#0c3b5a, #1369584b), url(Untitled-1.2.png);
  }
  
  .leftside , .rightside{
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
  }
}
