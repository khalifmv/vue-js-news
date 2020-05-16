<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@akhmadkha - Berita Seputar Kesehatan dan Corona</title>
        @include('partials._htmlheader')

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    </head>
    <body>
        <div id="kha">
            <app></app>
        </div>
        <script src="{{ asset('js/app.js')}}"></script>
        @include('partials._javascript')
    </body>
</html>
