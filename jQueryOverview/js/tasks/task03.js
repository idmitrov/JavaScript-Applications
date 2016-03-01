$(function () {
    var tableGenerator = {
        jsonInput:
            '[{"manufacturer": "BMW", "model": "E92 320i", "year": 2011, "price": 50000, "class": "Family"},'
            + '{"manufacturer": "Porsche", "model": "Panamera", "year": 2012, "price": 100000, "class": "Sport"},'
            + '{"manufacturer": "Peugeot", "model": "305", "year": 1978, "price": 1000, "class": "Family"}]',
        init: function () {
            this.generateTable(this.jsonInput);
        },
        generateTable: function(input) {
            var data = $.parseJSON(input),
                table = $('<table>'),
                thead = $('<thead>'),
                tbody = $('<tbody>'),
                headerValues;

            $.each(data, function(k, v) {
                if (!headerValues)  {
                    headerValues = Object.keys(v);
                }

                var tr = $('<tr>').append(
                    $('<td>').html(v.manufacturer),
                    $('<td>').html(v.model),
                    $('<td>').html(v.year),
                    $('<td>').html(v.price),
                    $('<td>').html(v.class)
                ).appendTo(tbody);
            });

            $.each(headerValues, function(k, v) {
                thead.append($('<th>').html(v));
            });

            table.append(thead, tbody).appendTo($('#task-03 .task-solution'));
        }
    };

    $(function () {
        tableGenerator.init();
    });
});