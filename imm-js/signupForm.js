/* FORMULARZ REJESTRACYJNY */

//domyślne wyłączenie buttona wysyłającego formularz
document.getElementById("post").disabled = true;

//funkcja włączająca button wysyłający formularz
function enableBtn() {
    document.getElementById("post").disabled = false;
}

//fragment odpowiadający za inne teksty na formularzu, jeśli ktoś przyszedł z CTA przy samodzielnym monitoringu internetu
var title = document.getElementById("title"); //zmienna znajdująca tytuł na formularzu
var subtitle = document.getElementById("subtitle"); //zmienna znajdująca podtytuł na formularzu
if (localStorage.getItem("subpage") == "ami") {
    title.innerHTML = "Zamówienie";
    subtitle.innerHTML = "Wypełnij formularz, aby zamówić narzędzie do samodzielnego ustawienia monitoringu internetu i social media.";
}

// define angular module/app
var formApp = angular.module('formApp', []);

// create angular controller and pass in $scope and $http
formApp.controller('formController', function($scope, $http) {

    // create a blank object to hold our form information
    // $scope will allow this to pass between controller and view
    $scope.formData = {};

    ////wypełnienie pola z adresem e-mail, mailem podanym w CTA na poprzedniej podstronie
    $scope.formData.email = localStorage.getItem("email");

    //wypełnienie atrybutu z podstroną z której przyszedł
    if (localStorage.getItem("subpage") == null) {
        $scope.formData.usluga = "rejestracja"
    }
    else {
        $scope.formData.usluga = localStorage.getItem("subpage");
    }

    // process the form
    $scope.processForm = function() {
        $http({
                method: 'POST',
                //url: 'http://test.panel.imm.com.pl/test_monitoring_registration.php',
                //data: $.param($scope.formData), // pass in data as strings
                url: 'http://192.168.128.149:9000/forms/form.php',
                data: {form: 'rejestracja',
                        data: {
                            usluga: $scope.formData.usluga,
                          forename: $scope.formData.forename,
                          surname: $scope.formData.surname,
                          email: $scope.formData.email,
                          company: $scope.formData.company,
                          phone: $scope.formData.phone,
                          'g-recaptcha-response': grecaptcha.getResponse()
                       }},
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                } // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data, status) { //funkcja obsługująca komunikat po udanym zuploadowaniu formularza
                $(".error-message").hide();
                console.log(data, status);
                $scope.successMessage = signupSuccess;
                $scope.hideThis = true;
                $scope.showThis = true;
            })
            .error(function(error, status) { //funkcja obsługująca komunikaty po błędach zwróconych przez serwer
                console.log(error, status);
                console.log(status);
                document.getElementById("post").disabled = true;
                if (error === 'WRONG_EMAIL') {
                    $scope.errorMessage = wrongEmail;
                }
                else if (error === 'USER_EXISTS') {
                    $scope.errorMessage = userExists;
                }
                else if (error === 'USER_EXISTS_INACTIVE') {
                    $scope.errorMessage = userExistsInactive;
                }
                else {
                    $scope.errorMessage = generalError;
                }
            });
            grecaptcha.reset(); //resetowanie recaptchy tak, żeby po udanym zuploadowaniu nie można było wysłać jeszcze miliona zapytań
    };
});
