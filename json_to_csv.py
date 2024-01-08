#%%
import csv

json_data = {
  "-NnHfiBuToKCi4rfQIlP": {
    "billValue": "1111",
    "name": "a",
    "phoneNumber": "a"
  },
  "-NnHfqZYyKiTldSRj132": {
    "billValue": "122",
    "name": "c",
    "phoneNumber": "c"
  },
  "-NnHgd7lGhwVNpoiDUXr": {
    "billValue": "254",
    "name": "chewyuhan",
    "phoneNumber": "01444775"
  }
}

csv_filename = "output.csv"

with open(csv_filename, 'w', newline='') as csvfile:
    fieldnames = ["ID", "BillValue", "Name", "PhoneNumber"]
    csv_writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    csv_writer.writeheader()

    for user_id, user_data in json_data.items():
        csv_writer.writerow({
            "ID": user_id,
            "BillValue": user_data["billValue"],
            "Name": user_data["name"],
            "PhoneNumber": user_data["phoneNumber"]
        })

print(f"CSV file '{csv_filename}' created successfully.")
