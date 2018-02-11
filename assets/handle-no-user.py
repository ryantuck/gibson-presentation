# ... continued ...

# get a list of all instances
instances = gibson.get_all_instances()

# find the instance(s) associated with this user
filtered_instances = [i for i in instances if i['user'] == who]

# barf if no user found
if len(filtered_instances) == 0:
    return _return_payload(
        message=user_not_found_message.format(user=who),
        color='red',
    )
