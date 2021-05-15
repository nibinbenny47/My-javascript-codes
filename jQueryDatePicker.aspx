<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="jQueryDatePicker.aspx.cs" Inherits="jQueryTutorial.jQueryDatePicker" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <link rel="stylesheet" href="js/jquery-ui.min.css" />

    <script src="js/jQuery.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script>
        $(function () {
            $('#txtDatePicker').datepicker(
                {
                    numberOfMonths: 1,
                    showOn: 'button',
                    buttonImageOnly: true,
                    
                    buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
                    changeYear: true, //for change year dropdown
                    changeMonth: true,  //for change month dropdown
                    showWeek: true,  //for show week sidebyside
                    showOtherMonths: true, //fill calender to make good visible
                    weekHeader: "wk no", //give header to week
                    minDate: new Date(), //give min date as today
                    maxDate: new Date(2025, 0, 5) //give max date as you wish
                });  
        })
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Date:<asp:TextBox runat="server" ID="txtDatePicker" ></asp:TextBox>
        </div>
    </form>
</body>
</html>
