from cryptography.fernet import Fernet

# Функция для шифрования сообщения
def encrypt_message(message):
    key = 'zYJFrcd86YcGPZEpj27S_sSjk3wtS3PS151ZR1df8zQ='
    fernet = Fernet(key)
    encrypted_message = fernet.encrypt(message.encode())
    return encrypted_message

# Функция для дешифрования сообщения
def decrypt_message(encrypted_message):
    key = 'zYJFrcd86YcGPZEpj27S_sSjk3wtS3PS151ZR1df8zQ='
    fernet = Fernet(key)
    decrypted_message = fernet.decrypt(encrypted_message).decode()
    return decrypted_message