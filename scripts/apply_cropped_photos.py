import os
import shutil

dir_path = r"c:\Users\poeti\metapainting-rebuild\public\paintings\chemical-expression"

# 1. Final-1.jpg -> 05-complete-1.jpg & thumb.jpg
final_1 = os.path.join(dir_path, "Final-1.jpg")
if os.path.exists(final_1):
    shutil.copy2(final_1, os.path.join(dir_path, "05-complete-1.jpg"))
    shutil.copy2(final_1, os.path.join(dir_path, "thumb.jpg"))
    print("Mapped Final-1.jpg -> 05-complete-1.jpg & thumb.jpg")

# 2. resrev1.jpg -> 06-effect-1.jpg
resrev1 = os.path.join(dir_path, "resrev1.jpg")
if os.path.exists(resrev1):
    shutil.copy2(resrev1, os.path.join(dir_path, "06-effect-1.jpg"))
    print("Mapped resrev1.jpg -> 06-effect-1.jpg")

# 3. resrev2.jpg -> 06-effect-2.jpg
resrev2 = os.path.join(dir_path, "resrev2.jpg")
if os.path.exists(resrev2):
    shutil.copy2(resrev2, os.path.join(dir_path, "06-effect-2.jpg"))
    print("Mapped resrev2.jpg -> 06-effect-2.jpg")

print("Cropped photos mapped successfully.")
