console.log('Whaddup World!');

$(function () {

    $(".eat-btn").on("click", function (e) {
        e.preventDefault();
        console.log("clicked the button")
        let id = $(this).attr("data-id");
        console.log(id);

        $.ajax({
            url: `/api/burger/${id}`,
            method: "PUT"
        }).then((response) => {
            console.log(response);
            location.reload();
        });
    });
});
