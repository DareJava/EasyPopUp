# EasyPopUp
PopUp API for angularJs(alerts and Menu)

 STEP 1:
    Add this to page
      <script src="PATH_TO/easypopupApp.js"></script>

 STEP 2:
    Use the directive tag
      <easy-Popper type='type*' ></easy-Popper>
       *where type could be 'menu' or 'alert'
    where you want to popUp


 STEP 3:
       For isolated Scope issues, wrap the afforementioned tag in a div
       and set the ng-Show to a desired true/false value, Most times its a false
      since you dont want you alert/menu to show on bodyLoad
          <div id="menuEvent" ng-show="ShowEventM">
            <easy-Popper type='menu' info='menu' ></easy-Popper>
          </div>
     Where You can toggle the popup from the Controller on changing 
           ShowEventM to true/false
     i.e $scope.ShowEventM = false/true

     
