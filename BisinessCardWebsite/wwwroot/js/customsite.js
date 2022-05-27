$('#closeBtn').click(function () {
    var node = document.getElementById('response-block');
    node.style.visibility = 'hidden';
});

$(function () {
    $('#tel').mask("+375(99)-999-99-99", {
        completed: function () {
            document.getElementById('tel').style.border = '1px solid #bdbdbd';
        }
    });
});

$(function () {
    $("#submitBtn").click(function () {
        var valid = check_email_form();

        if (valid) {
            var data = $("#email_form").serialize();

            $.ajax({
                type: 'POST',
                url: '/Card/SendEmail',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: data,
                success: function () {
                    var node = document.getElementById('response-block');
                    node.style.visibility = 'visible';
                    document.getElementById('h3-response-message').innerHTML = "The letter was successfully sent. I'll contact you soon";
                    clear_form();
                },
                error: function () {
                    var node = document.getElementById('response-block');
                    node.style.visibility = 'visible';
                    document.getElementById('h3-response-message').innerHTML = 'Ops... Something went wrong :(';
                }
            });
        } else {
            return;
        }
    });
});

function check_email_form() {
    var valid_form = true;

    var name = document.getElementById('name');
    if (name.value == '') {
        name.style.border = '1px solid red';
        $('#name').attr('oninput', "on_input(this)");
        valid_form = false;
    }

    var tel = document.getElementById('tel');
    if (tel.value == '') {
        tel.style.border = '1px solid red';
        valid_form = false;
    }

    var email = document.getElementById('email');
    if (email.value == '') {
        email.style.border = '1px solid red';
        $('#email').attr('oninput', "on_input_email(this)");
        $('#email').attr('pattern', "[a-z0-9._%+-]+@@[a-z0-9.-]+\.[a-z]{2,4}$");
        valid_form = false;
    }

    var message = document.getElementById('message');
    if (message.value == '') {
        message.style.border = '1px solid red';
        $('#message').attr('oninput', "on_input(this)");
        valid_form = false;
    }

    return valid_form;
};

function on_input(elem) {
    if (elem.value != '') {
        elem.style.border = '1px solid #bdbdbd';
    } else {
        elem.style.border = '1px solid red';
    }
};

function on_input_tel(elem) {
    console.log(elem.value);
    if (elem.value != '') {
        elem.style.border = '1px solid #bdbdbd';
    } else {
        elem.style.border = '1px solid red';
    }
};

function on_input_email(elem) {
    if (elem.value != '' && elem.value.match(elem.getAttribute('pattern'))) {
        elem.style.border = '1px solid #bdbdbd';
    } else {
        elem.style.border = '1px solid red';
    }
};

function clear_form() {
    document.getElementById('name').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('email').value = '';
    document.getElementById('topic').value = '';
    document.getElementById('message').value = '';
};

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > document.documentElement.offsetHeight - $('#contacts').height() * 2) {
            $('.scrollup').css({ 'background': '' });
            $('.scrollup').css({ 'background': 'url(\'../img/icon_top_negate.png\') no-repeat' });
        } else {
            $('.scrollup').css({ 'background': '' });
            $('.scrollup').css({ 'background': 'url(\'../img/icon_top.png\') no-repeat' });
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });
});