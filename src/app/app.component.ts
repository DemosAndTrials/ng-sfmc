import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Postmonger from 'postmonger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular - sfmc';

  ngOnInit() {
    console.log('*** ' + window.location.href  + ' ***');
    const connection = new Postmonger.Session();

    $(window).ready(function() {
      console.log('ready + request Endpoints');
      connection.trigger('ready');

      // TODO just for testing
      connection.trigger('requestEndpoints');
      connection.trigger('requestTokens');
  });

    $(document).ready(function() {
      $('#button').click(function() {
        console.log('sdfsdd');
          // var div = $('div');
          // div.animate({left: '100px'}, 'slow');
          // div.animate({fontSize: '5em'}, 'slow');
      });
  });
  }
}
