//Tooltip functionality for profile picture

$( document ).ready( function() {
    $( '.tooltip' ).tooltipster();
} );

//Modal popup which blurs background and gives additional information
//when computer icon is clicked on.

$( function() {
        $( '#show' ).avgrund( {
            height: 200,
            holderClass: 'custom',
            showClose: true,
            showCloseText: 'Close',
            enableStackAnimation: true,
            onBlurContainer: '.container',
            template: '<p> I am constantly learning ' +
            'new programming languages and ' +
            'ways to present data ' +
            'so check back here for updates.' +
            'You can always follow me on Twitter and LinkedIn' +
            'to see recent updates on my progress. </p>'
        } );
    } );

//Custom JQuery functionality

$( 'button' ).click( function() {
  $( 'p' ).show( 'slow' );
} );
