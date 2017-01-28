from django import forms

class ContactForm(forms.Form):
    contact_name = forms.CharField(
        required=True,
        widget=forms.TextInput(attrs={
            'placeholder': 'Name',
            'class':'e-textinput',
            'style': 'font-size: 30px',
            'outline-width': '0'

        })
    )
    contact_email = forms.EmailField(
        required=True,
        widget=forms.TextInput(attrs={
            'placeholder': 'Email',
            'class':'e-textinput',
            'style': 'font-size: 30px'

        })
    )
    content = forms.CharField(
        required=True,
        widget=forms.Textarea(attrs={
            'placeholder': 'Message',
            'class':'e-textinput e-message',
            'style': 'font-size: 30px',
        })
    )