from django.db import models
from .encryption_utils import encrypt_message, decrypt_message
from django.contrib.auth.models import User

class Messages(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE),
    text = models.BinaryField(blank=True, null=True),
    timestamp = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        self.text = encrypt_message(self.text)  # Шифрование перед сохранением
        super(Messages, self).save(*args, **kwargs)

    def get_decrypted_text(self):
        return decrypt_message(self.text)  # Дешифрование при запросе