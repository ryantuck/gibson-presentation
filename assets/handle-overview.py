def handle(event, context):

    # get input string from hipchat room
    input_string = event['item']['message']['message'].strip()

    # remove leading '/gibson'
    command = input_string[len('/gibson '):]

    # parse command
    if command == 'overview':
        # ...
    if command == 'help':
        # ...
