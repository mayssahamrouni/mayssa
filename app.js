const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>FORMULAIRE</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>

   <style>
      table {
        border-style: inset;
        border-width: 9px;
      }
      th {
       border-width: 9px ;
      }
      td {
       border-width: 9px  ;
       color:#585858;
      }
      input{
        font-size: 20px; 
        color:#585858;

            }
    legend{

        color:#003366;
    }
    </style>
  </head>
  <body>
    <section>
      Welcome to my world 
    </section>
    <div class="form">

		<fieldset>
    <legend style="font-size: 25px" align="center">AJOUT ETUDIANT</legend>
<form>

<table align = "center" bgcolor="#E2A9F3" width="1200"  style="font-size: 25px">
	
<tr>
		<td  >
			<label for="matricule" bordor ="20"  >Matricule : </label>
		</td>
        <br>
		<td >
    	 <input type="text" name="matricule" id="matricule" size="25" style="font-size: 20px" >
    	</td>
</tr>
<br>
<tr>

    	<td><label for="nom">Nom : </label></td>
    	<td><input type="text" name="nom" id="nom" size="25" style="font-size: 20px"></td>
</tr>

<tr>
    	
    	<td><label for="prenom">Prenom : </label></td>
    	<td><input type="text" name="prenom" id="prenom" size="25" style="font-size: 20px"></td>
</tr>

<tr>
    	<td><label for="adresse">Adresse : </label></td>
    	<td><input type="textarea" name="adresse" id="adresse" size="25" style="font-size: 20px"></td>
</tr>
    
    
    	<tr>
    		<td><label for="naissance">Naissance:</label></td>
<td><input type="date" id="naissance" name="naissance" size="25" style="font-size: 20px"></td>
</tr>

<tr>
<td><label for="email">Email:</label></td>
<td><input type="email" id="email" name="email" size="25" style="font-size: 20px"></td>
</tr>

<tr>
<td><label for="password">Password:</label></td>
<td><input type="text" id="password" name="password" size="25" style="font-size: 20px"></td>
</tr>

<tr>
  <td>
 
<input type="file" name="fichier" >
  </td>

</tr>
<tr>
<td><input type ="submit" name="valider" style="background: #E3CEF6" ></td>
<td><input type ="reset" name="reset"  style="background:#E3CEF6"></td>
</tr>
</form>
</table>
</fieldset>
    
	</div>
    
  </body>
</html>
`
