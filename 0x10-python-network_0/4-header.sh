#!/bin/bash
# send a GET requests  to a given URL with a header variable.
curl -sH "X-HolbertonSchool-User-Id: 98" "${1}"
