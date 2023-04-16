$(document).ready(function() {
    // обработчик клика на кнопку
    $('button[data-target="#tasksModal"]').on('click', function() {
      // отправляем AJAX-запрос на сервер
      $.ajax({
        url: 'https://bitrix-dev-kronos.ru/kronosStatistics/public/getWorkerTasks',
        method: 'POST',
        data: {
          "user_bitrix_id": "17",
          "created_at": "2023-04-11 07:06:51"
        },
        success: function(response) {
          // обработчик успешного ответа от сервера
          if (response.status == 200) {
            // получаем список задач из ответа
            var tasks = response.data.worker_tasks;
            // очищаем тело таблицы
            $('#tasksTableBody').empty();
            // заполняем таблицу данными
            $.each(tasks, function(key, value) {
              var row = '<tr><td><a href="' + key + '">' + key + '</a></td><td>' + value + '</td></tr>';
              $('#tasksTableBody').append(row);
            });
          }
        }
      });
    });
  });
  chrome.runtime.sendMessage({ message: "Hello" }, function(response) {
    if (chrome.runtime.lastError) {
      console.log("Error:", chrome.runtime.lastError.message);
    } else {
      console.log("Response:", response);
    }
  });