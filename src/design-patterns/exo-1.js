(function(){

    var carManager = {

        // demande information
        demandeInfos: function( model, id ){
            return "L\'information " + model + " avec l\'ID " + id + " est toto";
        },

        // achat
        acheterVehicule: function( model, id ){
            return "Vous avez acheter le vehicule " + id + ", a " + model;
        },

        // reservation
        reserverVehicule: function( model, id ){
            return "Vous avez reserver le vehicule " + model + " ( " + id + " ) ";
        }

    };

    carManager.execute = function ( name ) {
        return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
    };

    carManager.execute( "demandeInfos", "BMW", "14523" );
    carManager.execute( "acheterVehicule", "Ferrari", "54323" );
    carManager.execute( "reserverVehicule", "Tesla", "34232" );

    // completer ici pour recuperer la string associé a l'action

})();
