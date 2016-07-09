sap.ui.define([
        'sap/ui/core/mvc/Controller'
    ],
    function (Controller) {

        return Controller.extend('ui5.dev.controller.App', {

            onInit : function () {
            },
						start : function() {
							this.getOwnerComponent().getRouter().navTo("Home")
						},
						back : function() {
							window.history(-1)
						}

        })

    });
