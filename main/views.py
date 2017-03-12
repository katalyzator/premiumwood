import os

from django.core.mail import EmailMessage
from django.shortcuts import render
from django.template import Context, Template
from django.views.decorators.csrf import csrf_exempt

from premiumwood.settings import BASE_DIR


def index_view(request):
    context = {}
    template = 'index.html'

    return render(request, template, context)


@csrf_exempt
def send_mail(request):
    try:
        name = request.POST.get('name')
        number = request.POST.get('number')
        email = request.POST.get('email')

        f = open(os.path.join(BASE_DIR, "templates/mail.html"))

        content = f.read()
        f.close()
        context = Context(dict(mail=email, number=number, name=name))
        template = Template(content)

        print email
        print number
        print name

        email = EmailMessage('Application from Site', template.render(context), to=['info@pw.kg'])
        email.content_subtype = 'html'

        email.send()

        context1 = {"result": "success"}
        template1 = 'index.html'

        return render(request, template1, context1)

    except:

        context1 = {"result": "error"}
        template1 = 'index.html'

        return render(request, template1, context1)
