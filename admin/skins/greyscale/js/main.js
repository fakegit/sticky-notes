/**
* Sticky Notes pastebin
* @ver 0.2
* @license BSD License - www.opensource.org/licenses/bsd-license.php
*
* Copyright (c) 2011 Sayak Banerjee <sayakb@kde.org>
* All rights reserved. Do not remove this copyright notice.
*/

// Startup function
$(document).ready(function() {
    
    $('#mult_select').click(function() {
        $('#mult').children().attr('selected', 'selected');
        $('#mult').focus();
        
        return false;
    });
    
    $('#mult_deselect').click(function() {
        $('#mult').children().removeAttr('selected');
        $('#mult').focus();
        
        return false;
    });
    
    if ($('#stickynotes_update').html().length > 0) {
        var url = $('#stickynotes_update_svr').val();
        var current = parseInt($('#stickynotes_build_num').val());
        
        var jqxhr = $.get(url, function(data) {    
            var start = parseInt(strpos(data, '<StickyNotesVersion>')) + 20;
            var end = parseInt(strpos(data, '</StickyNotesVersion>'));
            var version = parseInt(data.substr(start, (end - start)));
                
            if (version > current)
            {
                $('#stickynotes_ver')
                    .css('color', 'darkRed')
                    .removeAttr('class');
                $('.waitimg').hide();
                $('#stickynotes_update').show();
            }
            else
            {
                $('.waitimg').hide();
            }
        })
        .error(function() { 
            $('.waitimg').hide();
        });
    }
});

function strpos (haystack, needle, offset) {
    var i = (haystack + '').indexOf(needle, (offset || 0));
    return i === -1 ? false : i;
}