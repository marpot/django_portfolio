from django.shortcuts import render, redirect, get_object_or_404
from .models import Project, Tag
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm



def home(request):
    projects = Project.objects.all()
    tags = Tag.objects.all()
    return render(request, "projects.html", {"projects": projects, "tags": tags})

def about(request):
    return render(request, "about.html")


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']

            # Zbudowanie wiadomości email
            email_message = f"Name: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}"

            # Wysyłanie wiadomości e-mail
            send_mail(
                subject,
                email_message,
                email,  # Adres nadawcy
                [settings.DEFAULT_FROM_EMAIL],  # Adres odbiorcy
                fail_silently=False,
            )

            # Po wysłaniu wiadomości przekierowujemy użytkownika z komunikatem
            return redirect('contact_success')  # Zmieniamy na inną stronę, np. contact_success

    else:
        form = ContactForm()

    return render(request, "contact.html", {'form': form})

def contact_success(request):
    return render(request, "contact_success.html")

def project(request, id):
    project = get_object_or_404(Project, pk=id)
    return render(request, "project.html", {"project": project})

