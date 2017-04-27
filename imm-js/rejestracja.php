<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <link rel="shortlink" href="http://www.imm.com.pl/" />
   <meta name="robots" content="follow, index" />

   <!--<link href="https://fonts.googleapis.com/css?family=Miriam+Libre:400" rel="stylesheet">-->
   <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
   integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
   <link href="http://localhost/wordpress/wp-content/themes/imm/style.css" rel="stylesheet" type="text/css">

   <title><?php echo get_the_title(); ?></title>

   <meta name="MobileOptimized" content="width">
   <meta name="HandheldFriendly" content="true">
   <meta name="viewport" content="width=device-width,initial-scale=1.0">
   <meta http-equiv="cleartype" content="on">

   <link rel="icon" href="http://localhost/wordpress/wp-content/uploads/2017/01/favicon.png" />
   <link rel="icon" sizes="192x192" href="http://localhost/wordpress/wp-content/uploads/2017/01/andro_favicon.png" />
   <script src='https://www.google.com/recaptcha/api.js?onload=onloadCallback' async defer ></script>
</head>
<body>

<!--FORMULARZ -->
<div ng-app="formApp" ng-controller="formController">
<div class="container-extra-small ng-hide" ng-show="showThis">
   <h2><?php echo $form['SIGNUP_SUCCESS2']; ?></h2>
   <h4 class="with-bottom-padding text-center" style="padding-top:5px"><?php echo $form['SIGNUP_SUCCESS2_SUBTITLE']; ?></h4>
   <div class="question no-bg">
      <div class="vcard" style="display:inline-block">
        <div class="tel white-bg">
          +48 22 378 37 50
        </div>
      </div>
      <a href="mailto:imm@imm.com.pl" class="btn btn-primary">imm@imm.com.pl</a>
   </div>
</div>
<div class="container-extra-small" ng-hide="hideThis">
<h2 id="title"><?php echo $form['REGISTER_TITLE']; ?></h2>
<h4 class="with-bottom-padding text-center" style="padding-top:5px" id="subtitle"><?php echo $form['REGISTER_SUBTITLE']; ?></h4>


      <!-- SHOW SUCCESS MESSAGES -->
      <div id="messages" class="success-message ng-hide" ng-show="successMessage">{{ successMessage }}</div>

      <!-- SHOW ERROR MESSAGES -->
      <div id="messages" class="error-message ng-hide" ng-show="errorMessage">{{ errorMessage }}</div>

      <!-- FORM -->
      <form ng-submit="processForm()" class='signup'>

         <!-- FORENAME -->
         <div class="form-group col-md-6" ng-class="{ 'has-error' : errorName }">
            <label for="forename" class="obligatory"><?php echo $form['FORM_FORENAME']; ?></label>
            <input name="forename" class="form-control" id="forename" type="text" required maxlength="64" ng-model="formData.forename">
         </div>

         <!-- SURNAME -->
         <div class="form-group col-md-6" ng-class="{ 'has-error' : errorName }">
            <label for="surname" class="obligatory"><?php echo $form['FORM_SURNAME']; ?></label>
            <input name="surname" class="form-control" id="surname" type="text" required maxlength="64" ng-model="formData.surname">
         </div>

         <!-- EMAIL ADRESS -->
         <div class="form-group col-md-12" ng-class="{ 'has-error' : errorName }">
            <label for="email" class="obligatory"><?php echo $form['FORM_EMAIL']; ?></label>
            <input name="email" class="form-control" id="email" type="email" required ng-model="formData.email">
         </div>

         <!-- COMPANY NAME -->
         <div class="form-group col-md-12" ng-class="{ 'has-error' : errorName }">
            <label for="company"><?php echo $form['FORM_COMPANY']; ?></label>
            <input name="company" class="form-control" id="company" type="text" maxlength="128" ng-model="formData.company">
         </div>

         <!-- PHONE NUMBER -->
         <div class="form-group col-md-12" ng-class="{ 'has-error' : errorName }">
            <label for="phone" class="obligatory"><?php echo $form['FORM_PHONE']; ?></label>
            <input name="phone" class="form-control" id="phone" type="text" required maxlength="64" ng-model="formData.phone">
         </div>

         <!-- ZGODA NA PRZETWRZANIE DANYCH OSOBOWYCH -->
         <div class="form-group col-md-12">
           <label for="agree" class="agree-terms obligatory">
             <input name="agree" id="agree" type="checkbox" required>
             <?php echo $form['FORM_AGREE_TERMS']; ?>
           </label>
         </div>

         <!-- RECAPTCHA -->
         <div style="text-align:center">
            <div class="g-recaptcha" data-sitekey="6LdSNRYUAAAAABf2OwfTeLJ_KTY3QZfVdkefrvkz" data-callback="enableBtn" style="display:inline-block"></div>
         </div>

         <!-- SUBMIT BUTTON -->
         <div class="col-md-12">
            <input ng-click="showTheForm = !showTheForm" class="send full-width" value="<?php echo $form['FORM_SEND']; ?>" type="submit" id="post">
         </div>

      </form>
    </div>

    <!-- SHOW DATA FROM INPUTS AS THEY ARE BEING TYPED -->
    <!--<pre>
      {{ formData }}
   </pre>-->

</div>

<!--STOPKA Z GŁÓWNYMI STRONAMI / STOPKA NA REJESTRACJI -->
<div class="container-smaller signup-footer">
<ul>
   <li><a href="<?php echo $tabs['MAIN_PAGE_LINK']; ?>"><?php echo $tabs['MAIN_PAGE']; ?></a></li>
   <li><a href="<?php echo $tabs['SHORT_CONTACT_LINK']; ?>"><?php echo $tabs['SHORT_CONTACT']; ?></a></li>
   <li><a href="<?php echo $tabs['REGISTER_BLOG_LINK']; ?>"><?php echo $tabs['REGISTER_BLOG']; ?></a></li>
   <li><a href="<?php echo $tabs['ABOUT_LINK']; ?>"><?php echo $tabs['ABOUT']; ?></a></li>
</ul>
<h6><?php echo $tabs['COPYRIGHT']; ?></h6>
</div>
<?php include 'formMessages.php'; ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js" type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.20/angular.min.js" type="text/javascript"></script>
<script src="http://localhost/wordpress/wp-content/themes/imm/js/bootstrap.min.js" type="text/javascript"></script>
<script src="http://localhost/wordpress/wp-content/themes/imm/js/owl.carousel.min.js" type="text/javascript"></script>
<script src="http://localhost/wordpress/wp-content/themes/imm/js/app.js" type="text/javascript"></script>
<script src="http://localhost/wordpress/wp-content/themes/imm/js/signupForm.js" type="text/javascript"></script>

<script>

</script>

</body>

</html>
