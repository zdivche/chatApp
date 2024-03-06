import json
from channels.testing import WebsocketCommunicator
from channels.layers import get_channel_layer
from django.test import TestCase
from .consumers import ChatConsumer

class ChatConsumerTestCase(TestCase):
    async def test_chat_consumer(self):
        # Создаем коммуникатор WebSocket с нашим ChatConsumer
        communicator = WebsocketCommunicator(ChatConsumer, "/ws/chat/test_room/")
        connected, _ = await communicator.connect()

        # Проверяем, что соединение успешно установлено
        self.assertTrue(connected)

        # Отправляем сообщение
        await communicator.send_json_to({"message": "Test message"})

        # Получаем сообщение от сервера
        response = await communicator.receive_json_from()

        # Проверяем, что полученное сообщение соответствует ожидаемому
        self.assertEqual(response, {"message": "Test message"})

        # Отключаемся
        await communicator.disconnect()
