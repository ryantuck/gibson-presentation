def start(instance_id):
    """
    Starts a user's instance.
    Idempotent.
    """
    response = boto3.client('ec2').start_instances(
        InstanceIds=[instance_id],
    )
