import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "flow-bachata",
      clientEmail:"firebase-adminsdk-fbsvc@flow-bachata.iam.gserviceaccount.com",
      privateKey:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDU8mfhgLQjVUb9\nXYbXoJMpngI9DI6dDp/dzG9z9GETd+xktAk5DkAwhHLIk9wynoIIGEmYzairLgD6\nwp1zKY2iLiUfRobJ3XXkKGw5AcAXC+ASirehh2GoKGLyb8ZmVEgUjQ9GSdtSv2V4\nKpXR/yr5+QJMxebJSQqu0OS5LC0iA+97FoUbYSJREBi8zAGO+uzOjxL0U8RrbDJg\nLy1Z9CbWtbJcaowSOcMy1TjnXmEs2QzM8QLu334UqpwxahLG3b2/OZQrEhiHZKEo\n/AId/HVN+IkvTumDV9Jt4JdgPqwgpx1ZtEpbFyafCQerkjic/YwYq3wfC3i0JjYp\n48CJMn9NAgMBAAECggEADiu8fH31XuWRphI3gzlxGaOld/0SL4L14gt0/kUswaAp\nJ9FwTK71WBU0U0M9s9OnCRVerm+/MfcLgyR42F1TSs/h0gk+NohJjF+hRhDnANGe\nPXWkPzhUaB2Z6hLEo/InYtC5S77l/MV2Ye8JjdI6gKyQud2wnEQDVTtbATSeo0T7\nLWdheAuCW3A6/JajKqiKhTrO9RdDWaG2qW5T/X3MKafLgefGo+MklpgZwAzfwjZl\nsOHB4fIIkzLmRF+Dhm+uw16zNcQ7nLxIyPZyRr7/17cYBhUZWpR5IXkL0/iN0Kq/\niRkH5AlS2jdM9cT5QEsBSLdMoGZNkKFn5qFbWjZd+QKBgQDypH45LkZ6OK1U8F5l\nf6Lv2HI0W00zm55rrN7fmBp1gwijg25GuEHDl2A2TH9L8JXTRepDFdBmlna+XXZI\n3NH2gL+G+qTjqmBvybozQRht5i6OyCx42kshXftzLwjUulAXzsv52ti65rofRdyQ\n+pSkvO4Zc/7W9rX+DGcpwzrNeQKBgQDgq2smaEjm/nrV8nUqsfxdEJENgQUDfGdf\npXJaiOkMTEwQOt0ZZCLooKBLg8BhSgwzRjnYiJK8uyXpsszkYCpCtrzvH2hEq3sO\ngVUxqABrU9XKuqfZ+FjbCO3L5MMZDljFTkwPG0i22h/ZtC3W3wuVNgzfb3WlXlka\nzsVro+yPdQKBgQCtTfHds4ChIUQkC77QbfaZqpX/cUrV1ouzSnixaPlU/283ItOr\n7UUDh2YvwjmVqtPIYAJvQfBkpYlQdH7ckePhVZn2taT5+yIAFixJGXByZlrQnoat\nFvVccrz7SxfaoOw95PVpkvcDn3JGjeZ5IpDyjQLe6SuWrAXW21L/0DJ6uQKBgGM4\ncR7KKYASXQ9Ff6c2aZx0J4tOMneipkigWYtQMZPj0ifMxz5iceRIo+IVso2E1TSD\nzCIr1poREKJP+5rUOXWzHGeCeFrzXGpAhe5jIqRDpwRcQKrLufopzFMimWLkaiHg\n/UgipY9Tb4OGxkPBx2zDLRY0NEGvFCz5qkhqYZvNAoGBAOjEeGhkz724E9dwOUqB\nkZUFVrT2tvuDvZ30xNbsQCYtmkMHV9KlUb4tI0SBITheTUPOTRucBi2udc0yV7mZ\nee40xPMheTELLYbV+N9ccEzuEpA14eLcssg5MhcCVkZTVOVGOhgaHcMrzePASQ0c\n7HT+eOXAMkkzLUGf7QR4Yfyp\n-----END PRIVATE KEY-----\n"
,
    }),
  });
}

export const auth = admin.auth();
export const db = admin.firestore();
