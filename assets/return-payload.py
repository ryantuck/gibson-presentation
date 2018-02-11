def _return_payload(message, color):
    return {
        "color": color,
        "message": message,
        "notify": False,
        "message_format": 'text',
    }
