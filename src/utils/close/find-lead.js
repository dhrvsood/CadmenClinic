export const findLead = async (firstName, lastName, email) => {
  let lead

  try {
    const response = await fetch(`${CLOSE_API_URL}/data/search/`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        limit: null,
        query: {
          negate: false,
          queries: [
            {
              negate: false,
              object_type: 'lead',
              type: 'object_type'
            },
            {
              negate: false,
              queries: [
                {
                  negate: false,
                  related_object_type: 'contact',
                  related_query: {
                    negate: false,
                    queries: [
                      {
                        negate: false,
                        related_object_type: 'contact_email',
                        related_query: {
                          negate: false,
                          queries: [
                            {
                              condition: {
                                mode: 'full_words',
                                type: 'text',
                                value: email
                              },
                              field: {
                                field_name: 'email',
                                object_type: 'contact_email',
                                type: 'regular_field'
                              },
                              negate: false,
                              type: 'field_condition'
                            }
                          ],
                          type: 'and'
                        },
                        this_object_type: 'contact',
                        type: 'has_related'
                      }
                    ],
                    type: 'and'
                  },
                  this_object_type: 'lead',
                  type: 'has_related'
                },
                {
                  negate: false,
                  queries: [
                    {
                      condition: {
                        mode: 'full_words',
                        type: 'text',
                        value: `${firstName} ${lastName}`
                      },
                      field: {
                        field_name: 'name',
                        object_type: 'lead',
                        type: 'regular_field'
                      },
                      negate: false,
                      type: 'field_condition'
                    }
                  ],
                  type: 'and'
                }
              ],
              type: 'and'
            }
          ],
          type: 'and'
        },
        results_limit: null,
        sort: [
          {
            direction: 'desc',
            field: {
              field_name: 'date_created',
              object_type: 'lead',
              type: 'regular_field'
            }
          }
        ]
      })
    })

    if (!response.ok) throw new Error('Failed to fetch lead')
    const data = await response.json()
    return data.data[0]
  } catch (error) {
    console.error('Error finding lead:', error)
  }
}
