def get_all_instances():

    response = boto3.client('ec2').describe_instances(
        filters=[{
                'name': 'tag-key',
                'values': ['gibson-user'],
            }]
    )

    # return summary data for each instance
    return sorted(
        [
            _extract_info_from_instance_payload(i)
            for r in response['reservations']
            for i in r['instances']
            if i['state']['name'] != 'terminated'
        ],
        key=lambda x: x['user']
    )
