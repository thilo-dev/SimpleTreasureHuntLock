sap.ui.define(
  ["sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	'sap/m/MessageBox'],
  function(Controller, JSONModel, MessageBox) {

    return Controller.extend("ui5.dev.controller.Home", {

      onInit : function() {
				this.correctValues = {
					val1: "1",
					val2: "4",
					val3: "4",
					val4: "2"
				};
      },
			back : function() {
				this.getOwnerComponent().getRouter().navTo("Start");
			},

			onPressed : function(oEvt) {
				var val1 = this.byId("1").getValue() === this.correctValues["val1"];
				var val2 = this.byId("2").getValue() === this.correctValues["val2"];
				var val3 = this.byId("3").getValue() === this.correctValues["val3"];
				var val4 = this.byId("4").getValue() === this.correctValues["val4"];
				if(val1 && val2 && val3 && val4) {
					this.getOwnerComponent().getRouter().navTo("Loesung");
				} else {
					MessageBox.error("Die Zahl war Falsch! Nochmal versuchen!")
				}
			},

			onAfterRendering : function() {
				this.byId("page").focus();
			}

    })
})
